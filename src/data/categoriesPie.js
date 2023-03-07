import { useState, useEffect } from 'react';
import { ResponsivePie } from "@nivo/pie";

function Categories() {

    const [categoriesObject, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/apis/categories/countProducts')
            .then((response) => {
                return response.json()
            })
            .then((categories) => {
                let categoriesObject = categories.map(category => ({id: category.name, label: category.name, value: category.productCount, color: "",}));
                setCategories(categoriesObject)
            })
    }, [])
    
    return(
        <ResponsivePie
        
        data={categoriesObject}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        isInteractive={true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsDiagonalLength={20}
        arcLinkLabelsStraightLength={20}
        arcLinkLabelsThickness={5}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
        ]}
        fill={[]}
        legends={[]}
    />
    );

}

export default Categories