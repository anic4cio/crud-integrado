import { Schema, model, connect } from "mongoose"
import { UniversitiesInfo } from "./index"

const universitiesSchema = new Schema<UniversitiesInfo>({
  state_province: { type: String, required: false },
  web_pages: [{ type: Array, required: false }],
  country: { type: String, required: false },
  name: { type: String, required: false },
  alpha_two_code: { type: String, required: false },
  domains: [{ type: String, required: false }]
})

export const Universities = model<UniversitiesInfo>('Universities', universitiesSchema)
