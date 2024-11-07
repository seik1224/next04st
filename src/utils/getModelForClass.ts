import mongoose from "mongoose";
import {
  getModelForClass as _getModelForClass,
  modelOptions,
  ReturnModelType,
} from "@typegoose/typegoose";
import { AnyParamConstructor } from "@typegoose/typegoose/lib/types";

export const getModelForClass = <T extends AnyParamConstructor<any>>(
  model: T
) => {
  return (
    (mongoose.models[model.name] as ReturnModelType<T>) ||
    _getModelForClass(model)
  );
};
