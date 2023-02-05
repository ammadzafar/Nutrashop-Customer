import React, { useState } from "react";
import { Collapse, Slider, Checkbox, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux"
import { filterProductsOnCollectionsAndPrice } from "../../../store/actions/brandProductActions"

const { Panel } = Collapse;

export default function Filters() {
    const { filteredCollections } = useSelector(({ brandProducts }) => brandProducts)
    const dispatch = useDispatch()
    const [priceFilter, setPriceFilter] = useState([0, 5000])
    const [brandsFilter, setBrandsFilter] = useState([])
    function onChange(checkedValues) {
        setBrandsFilter(checkedValues)
        dispatch(filterProductsOnCollectionsAndPrice(checkedValues, priceFilter))
    }
    function onSliderChange(values) {
        setPriceFilter(priceFilter)
        dispatch(filterProductsOnCollectionsAndPrice(brandsFilter, values))

    }
    return (
        <div className="col-md-3 pb-15">
            <Collapse bordered={false} defaultActiveKey={['1']}
                expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}>
                <Panel defaultActiveKey={['1']} header="Collections" key="1">
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        <Row>
                            {filteredCollections.map(collection =>
                                <Col span={24}>
                                    <Checkbox value={collection.value}>{collection.label}</Checkbox>
                                </Col>
                            )}
                        </Row>
                    </Checkbox.Group>
                </Panel>

            </Collapse>
            
                <Collapse bordered={false} defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}>
                    <Panel defaultActiveKey={['1']} header="Price" key="1">

                        <Slider range={{ draggableTrack: true }}  onChange={onSliderChange} min={100} max={5000}  defaultValue={[0, 5000]} />

                    </Panel>

                </Collapse>
            
            
        </div>
    )
}
