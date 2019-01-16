import mongoose, { Schema } from 'mongoose';
import diffHistory from 'mongoose-diff-history/diffHistory';

import DeputyLink from './Schemas/DeputyLink';
import DeputyFunctions from './Schemas/DeputyFunctions';

const DeputySchema = new Schema(
  {
    URL: { type: String, required: true },
    webId: { type: String },
    img: { type: String },
    party: { type: String },
    name: { type: String, required: true },
    job: { type: String },
    office: [{ type: String }],
    links: [DeputyLink],
    biography: [{ type: String }],
    constituency: { type: String },
    constituencyName: { type: String },
    functions: [DeputyFunctions],
    speechesURL: { type: String },
    votesURL: { type: String },
    publicationRequirement: [{ type: String }],
  },
  { timestamps: true },
);

DeputySchema.plugin(diffHistory.plugin, { omit: ['updatedAt'] });
export default mongoose.model('Deputy', DeputySchema);
