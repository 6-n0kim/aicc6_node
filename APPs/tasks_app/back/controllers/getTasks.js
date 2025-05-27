const pool = require('../database/database');

exports.getTasks = async (req, res) => {
    const userId = req.params.userId;
    // console.log(userId)

    try {
        const result = await pool.query('SELECT * FROM tasks WHERE userId = $1', [userId]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ msg: 'Get Items Fail ' + error.message });
    }
};