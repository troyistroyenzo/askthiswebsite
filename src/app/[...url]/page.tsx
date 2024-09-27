interface PageProps {
    params:{ 
        url: string | string[] | undefined
    }
}

const Page = ({params}: PageProps) => {
    console.log(params)
    return <p>Hi</p>
}

export default Page;