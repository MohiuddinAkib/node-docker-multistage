import mongoose from 'mongoose';

export type PostDocument = mongoose.Document & {
  title: string;
  body: string;
};

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    body: String
  },
  { timestamps: true }
);

export const Post = mongoose.model<PostDocument>('Post', PostSchema);
