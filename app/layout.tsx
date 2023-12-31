import './globals.css'
import React, {Suspense} from "react";
import Loading from "@/app/loading";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout(props:{
    children : React.ReactNode,
}) {
  return (
    <html lang="zh-CN">
      <body >
        <Suspense fallback={<Loading />}>
          {props.children}
        </Suspense>
      </body>
    </html>
  )
}
