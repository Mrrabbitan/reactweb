import React, { Component } from 'react';
import TableSpecial from '../../../../Components/Detail/TableSpecial';

class LaneForImpAndExp extends Component {
    render() {
        return (
            <div>
                <TableSpecial
                    name="航线"
                    fileName={["a", "b", "c", "d", "e", "f", "g"]}
                    data={[]}
                />
            </div>
        )
    }
}

export default LaneForImpAndExp;