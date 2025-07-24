const pool = require('../config/db');
const fs=require('fs');
const path=require('path');

// Get all IPOs
const getAllIPOs = async (req, res) => {
   console.log('GET /api/ipos called')
  try {
    const result = await pool.query('SELECT * FROM ipo');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

//ongoing 
const getOngoingIpos=async(req,res)=>{
  try {
    const result=await pool.query("SELECT * FROM ipo WHERE status='ongoing'");
    console.log("IPO Data:", result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({error:'server error'});
  }
}

const getListedIpos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM ipo WHERE status='listed'");
    console.log("IPO Data:", result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add new IPO
const addIPO = async (req, res) => {
    const {
    company_name,
    price_band,
    open_date,
    close_date,
    issue_size,
    issue_type,
    listing_date,
    status,
  } = req.body;

  const logoPath = req.file ? `/uploads/${req.file.filename}` : null;

  const priceBandValue =
    price_band && price_band !== 'Not issued' && price_band.trim() !== ''
      ? price_band
      : null;

  const openDateValue =
    open_date && open_date !== 'Not issued' && open_date.trim() !== ''
      ? open_date
      : null;

  const closeDateValue =
    close_date && close_date !== 'Not issued' && close_date.trim() !== ''
      ? close_date
      : null;

  const issueSizeValue =
    issue_size && issue_size !== 'Not issued' && issue_size.trim() !== ''
      ? issue_size
      : null;

  const listingDateValue =
    listing_date &&
    listing_date !== 'Not issued' &&
    listing_date.trim() !== ''
      ? listing_date
      : null;

  // Validate and safely convert to Date objects only if valid
  const openDate =
    openDateValue && !isNaN(Date.parse(openDateValue))
      ? new Date(openDateValue)
      : null;

  const closeDate =
    closeDateValue && !isNaN(Date.parse(closeDateValue))
      ? new Date(closeDateValue)
      : null;

  const listingDate =
    listingDateValue && !isNaN(Date.parse(listingDateValue))
      ? new Date(listingDateValue)
      : null;


  
  try {
    const result = await pool.query(
      `
      INSERT INTO ipo (
        company_name, price_band, open_date, close_date,
        issue_size, issue_type, listing_date, status, logo
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
      `,
      [
        company_name,
        priceBandValue,
        openDate,
        closeDate,
        issueSizeValue,
        issue_type,
        listingDate,
        status,
        logoPath,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add IPO' });
  }
};

const deleteIpo=async(req,res)=>{
  const id=req.params.id;

  try {
    const result=await pool.query(`SELECT logo FROM ipo WHERE id=$1`,[id]);

    if(result.rows.length===0){
      return res.status(404).json({error:'ipo not found'});
    }

    const logoPath=result.rows[0].logo;

    await pool.query('DELETE FROM ipo WHERE id=$1',[id]);

    if(logoPath){
      const filePath=path.join(__dirname,'..',logoPath);
      fs.unlink(filePath,(err)=>{
        if(err){
          console.error(err.message);
        }
      })
    }
    res.status(200).json({message:'ipo deleted successfully'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({error:'server error'});
  }
}
const addListedIPO = async (req, res) => {
  const {
    company_name,
    ipo_price,
    listing_price,
    listing_gain,
    listing_date,
    cmp_value,
    current_return,
    status
  } = req.body;

  const logoPath = req.file ? `/uploads/${req.file.filename}` : null;

  const listingDateValue =
    listing_date &&
    listing_date !== 'Not issued' &&
    listing_date.trim() !== ''
      ? new Date(listing_date)
      : null;

  try {
    const result = await pool.query(
      `
      INSERT INTO ipo (
        company_name, logo, ipo_price, listing_price, listing_gain,
        listing_date, cmp_value, current_return, status
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
      `,
      [
        company_name,
        logoPath,
        ipo_price,
        listing_price,
        listing_gain,
        listingDateValue,
        cmp_value,
        current_return,
        status
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting listed IPO:', err);
    res.status(500).json({ error: 'Failed to add listed IPO' });
  }
};
module.exports = {
  getAllIPOs,
  addIPO,
  deleteIpo,
  getOngoingIpos,
  getListedIpos,
  addListedIPO
};
