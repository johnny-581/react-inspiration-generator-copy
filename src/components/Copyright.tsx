interface props {
    year: number
}
export default function Copyright({ year }: props) {
    return <p className="small">©️ {year}</p>
}