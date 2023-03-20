import NextAuth, { NextAuthOptions } from "next-auth";
//import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    // Configure one or more authentication providers
    session: {
                strategy: 'jwt'
            },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
      
        // ...add more providers here
    ],
})

// const authOptions: NextAuthOptions = {
//     session: {
//         strategy: 'jwt'
//     },
//     providers: [
//         CredentialsProvider({
//             type: 'credentials',
//             credentials: {},
//             authorize(credentials,req){
//                 const {email,password} = credentials as {
//                     email: string, 
//                     password: string,
//                 };
//                 //loginlogicc 
//                 if (email != "sneha.squasher@gmail.com" && password !== "1234"){
//                     return null; 
//                 }
//                 // if everything fine 
//                 return {id: '1234', name: 'john doe', email: 'sneha.squasher@gmail.com'}
//             },
//         })
//     ], 
//     pages: {
//         signIn: "/auth/signin", 
//     },
// }
// export default NextAuth(authOptions);



