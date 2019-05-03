import React, { Component } from 'react'
import { Range, getTrackBackground } from "react-range";

const STEP = 500;
const MIN = 5000;
const MAX = 50000;

export class Rangebar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            values: [5000]
        }
    }

    render() {
        return (
            <div className="w-50 float-left">
                <span>
                    <label className="text-info">Fee</label>
                    <label className="text-success float-right"><small>{this.state.values[0].toFixed(1) + " PKR"}</small></label>
                </span><br/>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Range
                        values={this.state.values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={values => this.setState({ values })}
                        renderTrack={({ props, children }) => (
                            <div
                                className="pt-4"
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: "10px",
                                    display: "flex",
                                    width: "100%"
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: "5px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        borderRightColor: 'red',
                                        background: getTrackBackground({
                                            values: this.state.values,
                                            colors: ["#548BF4", "#ccc"],
                                            min: MIN,
                                            max: MAX
                                        }),
                                        alignSelf: "center"
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "20px",
                                    width: "20px",
                                    borderRadius: "20px",
                                    backgroundColor: "green",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <div
                                    style={{
                                        height: "16px",
                                        width: "5px",
                                        backgroundColor: isDragged ? "white" : "green"
                                    }}
                                />
                            </div>

                        )}
                    />
                    {/* <output className="text-success pt-2" id="output">
                        <p><small>  {this.state.values[0].toFixed(1) + " PKR"}</small></p>
                    </output> */}
                </div>
            </div>
        )
    }
}

export default Rangebar
