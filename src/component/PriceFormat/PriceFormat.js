import NumberFormat from "react-number-format"

export default function PriceFormat(props) {
    return (
        <NumberFormat value={props.number} displayType={'text'} thousandSeparator={true} prefix={'PKR '}/>

    )


}
