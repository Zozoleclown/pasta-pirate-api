import mongoose, { Schema } from 'mongoose'

const alimentSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  type: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

alimentSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      image: this.image,
      type: this.type,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Aliment', alimentSchema)

export const schema = model.schema
export default model
