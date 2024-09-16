import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CacheState {
  data: Record<string, any>; // Dùng Record để lưu cache theo các key
  lastUpdated: number | null; // Để biết thời điểm cập nhật gần nhất
}

const initialState: CacheState = {
  data: {},
  lastUpdated: null,
};

const cacheSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    setCache: (state, action: PayloadAction<{ key: string; value: any }>) => {
      const { key, value } = action.payload;
      state.data[key] = value;
      state.lastUpdated = Date.now();
    },
    clearCache: state => {
      state.data = {};
      state.lastUpdated = null;
    },
  },
});

export const { setCache, clearCache } = cacheSlice.actions;
export default cacheSlice.reducer;
