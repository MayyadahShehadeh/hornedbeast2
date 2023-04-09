import React from "react";
import HornedBeast from "./HornedBeast";
import HornsData from './../HornsData.json';
import { Row, Form } from "react-bootstrap";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horns: 0,
            allBeasts: HornsData
        }
    }



    choosenNumOfHorns = (e) => {
        const hornsNum = parseInt(e.target.value);
        let filteredData = HornsData;
        
        if (hornsNum) {
            filteredData = HornsData.filter(item => item.horns === hornsNum);
        }
        this.setState({
            allBeasts: filteredData
        })

    }
    render() {
        return (
            <>
                <div className="row h-100 justify-content-center align-items-center" style={{margin:'35px'}}>

                    <Form.Select aria-label="Default select example" name='horns' style={{ width: '50%' }}

                        onChange={(e) => this.choosenNumOfHorns(e)} >

                        <option value="" selected disabled hidden>Select Number Of Horns</option>
                        <option value="0">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">..100</option>
                    </Form.Select>

                </div >

                <Row >
                    {
                        this.state.allBeasts.map((item, idx) => {
                            return (
                                <HornedBeast
                                    key={idx}
                                    title={item.title}
                                    img={item.image_url}
                                    description={item.description}
                                    horns={item.horns}
                                />





                                // --------- another way to filter the hornedbeasts by num of horns ----------


                                // (Number(this.state.horns) === item.horns &&
                                //     <HornedBeast
                                //         key={idx}
                                //         title={item.title}
                                //         img={item.image_url}
                                //         description={item.description}
                                //         horns={item.horns}
                                //     />

                                // ) || (Number(this.state.horns) === 0 &&

                                //     <HornedBeast
                                //         key={idx}
                                //         title={item.title}
                                //         img={item.image_url}
                                //         description={item.description}
                                //         horns={item.horns}
                                //     />)
                                // ---------------------------------------------------------------------
                            )
                        })}
                </Row>



                {/* ---------------------------------------------------------------------------------------------- */}
                {/* <HornedBeast title="UniWhal"
                        img="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="" />
                    <HornedBeast title="Rhino Family"
                        img="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description="" />
                    <HornedBeast title="Unicorn Head" img="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description="" /> */}
            </>

        )


    }

}

export default Main;