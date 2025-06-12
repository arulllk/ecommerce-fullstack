const testController = async(req,res) => {
    res.status(200).json({msg:'Routes Successfully tested'})
}

module.exports = {testController}