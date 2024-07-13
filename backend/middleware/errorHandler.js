// import jwt from 'jsonwebtoken'

// export const ensureAuthenticated = (req, res, next) => {
//     const auth = req.headers['authorization'];
//     if (!auth) {
//         return res.status(403)
//             .json({ message: 'Unauthorized, JWT token is require' });
//     }
//     try {
//         const decoded = jwt.verify(auth, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(403)
//             .json({ message: 'Unauthorized, JWT token wrong or expired' });
//     }
// }

export const invalidPathHandler = (req, res, next) => {
    const error = new Error("Invalid Path");
    error.statusCode = 404;
    next(error);
};

export const errorResponserHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    });
};
