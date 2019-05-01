import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


function DisplayReport(props) {

    // console.log(props.match.params.chapter_id)
    // console.log(props.info)

    const report = props.info.find((chapter) => {
        // console.log(chapter.id)
        if (chapter.id === parseInt(props.match.params.chapter_id)) {
            return true
        } else {
            return false
        }
    })

    var notes = ''
    if (report) {
        notes = report.chapter_notes
        
    }

    var id = ''
    if (report) {
        id = report.id
    }

    //console.log(report)
    console.log(props)
    console.log(id)

    return (
        <div className='column is-9 '>
            <p className="menu-label">
                Chapter Notes
            </p>
            <h2>{notes}</h2>
            <br />
            <br />
            {props.isLogin ?
                (
                    <div className='buttons are-small has-addons is-right'>
                        <span className='button'>Edit</span>
                        <span className='button' onClick={() => props.delete(id)}>Delete</span>
                    </div>
                )
                :
                (
                    <div></div>
                )

            }

        </div>
    )
};

function mapStateToProps(state) {
    return {
        isLogin: state.LoginReducer.isLogin
    }
};

export default connect(mapStateToProps)(withRouter(DisplayReport))