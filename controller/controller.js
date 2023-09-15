const User = require("../model/model");
const joi = require("joi");
const { StatusCodes } = require("http-status-codes");
const ApiError = require("../error/ApiError");

const createUser = async (req, res, next) => {
  // const { name } = req.body
  const userschema = joi.object({
    name: joi.string().required().min(4).max(20),
  });
  const { error } = userschema.validate(req.body);
  if (error) {
    const msg = error.details.map((er) => er.message);
    return next(new ApiError(msg, 404));
  }

  const user = await User.create({ ...req.body });

  res.status(StatusCodes.CREATED).json({ name: user.name, id: user._id });
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return next(new ApiError(`user with id ${id} does not exist`, 404));
  }
  res.status(StatusCodes.OK).json({ name: user.name, id: user._id });
};
const updateUser = async (req, res, next) => {
  const {
    params: { id },
    body: { name },
  } = req;
  if (name === "") {
    return next(new ApiError("can't update an empty name", 404));
  }
  const user = await User.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return next(new ApiError(`user with this id ${id} does not exist`, 404));
  }
  res.status(200).json({ name: user.name, id: user._id });
};
const deleteUser = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const user = await User.findOneAndRemove({ _id: id });

  if (!user) {
    return next(new ApiError(` user with this id ${id} does not exist`, 404));
  }
  res.status(200).json("user successfully deleted");
};
module.exports = { createUser, getUser, updateUser, deleteUser };
