/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'online voting system' });
    };
    module.exports = {
        index
        };