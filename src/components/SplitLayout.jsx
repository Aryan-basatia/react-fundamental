export default function SplitLayout({left,right}){
    return(
        <>
        <div style={{display: "flex"}}>{left}</div>
        <div style={{display: "flex"}}>{right}</div>
        </>
    )
}