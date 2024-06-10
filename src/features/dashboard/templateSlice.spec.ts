import type { AppStore } from "../../app/store"
import { makeStore } from "../../app/store"
import { TemplateSliceState, templateSlice } from "./templateSlice"

interface LocalTestContext {
  store: AppStore
}

describe<LocalTestContext>("counter reducer", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: TemplateSliceState = {}

    const store = makeStore({ template: initialState })

    context.store = store
  })

  it("should handle initial state", () => {
    expect(templateSlice.reducer(undefined, { type: "unknown" })).toStrictEqual(
      {},
    )
  })

  it("should handle ...", ({ store }) => {})
})
