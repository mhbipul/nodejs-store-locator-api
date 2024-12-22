/**
 * @description get all stores
 * @route get /api/v1/stores
 * @access Public
 *
 */
const StoreModel = require("../models/StoreModel");
exports.getStores = async (req, res, next) => {
  try {
    const stores = await StoreModel.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores,
    });
  } catch (err) {
    console.error(err);
    
    res.status(500).json({ error: `server error` });
  }
};

/**
 * @description create a stores
 * @route POST /api/v1/stores
 * @access Public
 *
 */

exports.addStore = async (req, res, next) => {
  try {
    const store = await StoreModel.create(req.body);

    return res.status(200).json({
      success: true,
      data: store,
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
        return res.status(400).json({
          error: "this store is already exist",
        });
      }
    res.status(500).json({ error: `server error` });
  }
};
