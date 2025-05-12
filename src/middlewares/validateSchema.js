export const validateSchema = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            error: "Datos inválidos",
            issues: result.error.errors.map(e => ({
                path: e.path,
                message: e.message,
            }))
        });
    }

    req.validatedData = result.data;
    next();
}