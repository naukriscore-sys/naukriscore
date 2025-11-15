import { rootApiSlice } from "./rootApislice";

const Auth = rootApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<any, void>({
            query: () => ({
                url: `/profile`,
                method: "GET",
            }),
            providesTags: ["profile"],
        }),
        scoreOverview: builder.query<any, void>({
            query: () => ({
                url: `/score-summary`,
                method: "GET",
            }),
            providesTags: ["score"],
        })
    })
})

export const { useGetProfileQuery, useScoreOverviewQuery } = Auth;