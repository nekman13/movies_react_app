import React from "react";

class ChooseType extends React.Component {


    render() {
        return (
            <div className="choose">
                <form action="#">
                    <p>
                        <label className="radioChooseTypeButton">
                            <input name="group1"
                                   type="radio"
                                   value=""
                                   onChange={this.props.handleChooseType}
                                   checked={this.props.state.type === ""}
                            />
                            <span>All</span>
                        </label>

                        <label className="radioChooseTypeButton">
                            <input name="group1"
                                   type="radio"
                                   value="movie"
                                   onChange={this.props.handleChooseType}
                                   checked={this.props.state.type === "movie"}
                            />
                            <span>Only movies</span>
                        </label>

                        <label className="radioChooseTypeButton">
                            <input name="group1"
                                   type="radio"
                                   value="series"
                                   onChange={this.props.handleChooseType}
                                   checked={this.props.state.type === "series"}
                            />
                            <span>Only series</span>
                        </label>
                    </p>
                </form>
            </div>
        )
    }
}

export default ChooseType;