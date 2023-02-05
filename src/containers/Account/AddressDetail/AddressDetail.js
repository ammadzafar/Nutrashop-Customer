import React,{ useState, useEffect} from "react";
import {
    Button,
    Layout,
    Table,
} from "antd";
import {Link, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {storeAddresses} from "../../../store/actions/addressActions";
import {EditOutlined} from "@ant-design/icons";
import NewAddress from "./NewAddress/NewAddress";
import EditAddress from "./EditAddress/EditAddress";


const {Content} = Layout;
const {Column} = Table;

function AddressDetails(props) {
    const [visible, setVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [addressId, setAddressId] = useState('')
    const {auth,isAuthenticated,isGuest} = useSelector(({auth}) => auth);
    const {addresses} = useSelector(({addresses}) => addresses);
    const customerId = auth.id
    const cancel =()=>{
        setVisible(false)
    }
    const handleVisible =()=>{
        setVisible(true)
    }
    const {push} = useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        (isAuthenticated || isGuest) ? dispatch(storeAddresses(customerId)):push("/")
    },[])
    // const [loading, setLoading] = useState(false)

    const cancelEditModal =()=>{
        setEditVisible(false)
    }
    const handleVisibleEditModal =(dataindex)=>{
        setAddressId(dataindex)
        setEditVisible(true)
    }
    return <Content>
            {/*<h2>All Address of {`${auth.user.firstName} ${auth.user.lastName}`}</h2>*/}
            <Button onClick={()=>handleVisible()} className="mb-3" type="primary">Create New Address</Button>
        <div
            className="site-layout-background"
        >
            {addresses !== null ? <Table dataSource={addresses}>
                <Column
                    className="Responsive-1224"
                    title="Sr #"
                    dataIndex="id"
                    key="id"
                />
                <Column
                    className="Responsive-1224"
                    title="Label"
                    dataIndex="label"
                    key="label"
                />
                <Column title="State" dataIndex="state" key="state"/>
                <Column title="City" dataIndex="city" key="city"/>
                <Column title="Postal Code" dataIndex="postal_code" key="postal_code"/>
                <Column title="Address" dataIndex="address" key="address"/>
                <Column
                    title="Action"
                    className="Responsive-1224"
                    dataIndex="id"
                    key="id"
                    render={(dataIndex) => (
                        <Button type="round" onClick={()=>handleVisibleEditModal(dataIndex)}><EditOutlined/>Edit</Button>
                    )}
                />
                )}
            </Table>:"No Record Find"}
        </div>
        <NewAddress visible={visible} cancel={cancel}/>
        <EditAddress visible={editVisible} addressId={addressId} cancel={cancelEditModal}/>
    </Content>;

}

export default AddressDetails;
