import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required:true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: { //プロフィールの画像
      type: String,
      default: "",
    },
  },
  { timestamps: true } //自動的に createdAt（作成日時） と updatedAt（更新日時） を記録
);

const User = mongoose.model("User",userSchema);

export default User
