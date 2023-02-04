const handler = (req, res) => {
    res.setPreviewData({})
    res.redirect(req.query.redirect)
}

export default handler