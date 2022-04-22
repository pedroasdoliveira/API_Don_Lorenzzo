import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.param.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }
  next();
};

export const validObjectBody = () => {};
