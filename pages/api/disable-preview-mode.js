const handler = (req, res) => {
    res.clearPreviewData()
    res.redirect(req.query.redirect)
}

export default handler