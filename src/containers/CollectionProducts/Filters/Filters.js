import React, {useState} from "react";
import {Collapse, Slider, Checkbox, Row, Col} from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from "react-redux"
import {filterProductsOnBrands} from "../../../store/actions/collectionProductActions"

const {Panel} = Collapse;

export default function Filters() {
    const {filteredBrands} = useSelector(({collectionProducts}) => collectionProducts)
    const dispatch = useDispatch()
    const [priceFilter,setPriceFilter]=useState([0, 5000])
    const [brandsFilter,setBrandsFilter]=useState([])
    function onChange(checkedValues) {
        setBrandsFilter(checkedValues)
        dispatch(filterProductsOnBrands(checkedValues,priceFilter))
    }
    function onSliderChange(values) {
        setPriceFilter(priceFilter)
        dispatch(filterProductsOnBrands(brandsFilter,values))

    }
    return (
        <div className="col-md-3 mb-20">
            <Collapse bordered={false}
                      expandIcon={({isActive}) => isActive ? <MinusOutlined/> : <PlusOutlined/>}>
                <Panel defaultActiveKey={['1']} header="Brands" key="1">
                    <Checkbox.Group style={{width: '100%'}} onChange={onChange}>
                        <Row>
                            {filteredBrands.map((brand,key)=>
                                <Col span={24} key={key} >
                                    <Checkbox value={brand.value}>{brand.label}</Checkbox>
                                </Col>
                            )}
                        </Row>
                    </Checkbox.Group>
                </Panel>

            </Collapse>
            <Collapse  bordered={false} defaultActiveKey={['1']}
                      expandIcon={({isActive}) => isActive ? <MinusOutlined/> : <PlusOutlined/>}>
                <Panel  defaultActiveKey={['1']} header="Price" key="1">
                    
                    <Slider range={{draggableTrack: true}}   onChange={onSliderChange}  min={100} max={5000} defaultValue={[0, 5000]} />

                </Panel>

            </Collapse>
        </div>
    )
}
