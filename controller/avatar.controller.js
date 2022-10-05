const getAvatar = (req, res) => {
    try {
        if (!req.file) { throw new Error('Image is not presented!'); }
        console.log('AQUI RECIBE LA FOTO ============>', req.file);
        return res.json({ cloudinary_url: req.file.path });
    } catch (e) {
        return res.status(422).send({ message: e.message })
    }
}

module.exports = {
    getAvatar
};
