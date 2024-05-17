import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        fetchJobsStart(state) {
            state.status = 'loading';
        },
        fetchJobsSuccess(state, action) {
            state.status = 'succeeded';
            state.jobs = action.payload;
        },
        fetchJobsFailure(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } = jobSlice.actions;

export default jobSlice.reducer;
