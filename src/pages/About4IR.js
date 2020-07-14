
import React from "react";
import useCompanyData from "../components/hook/useCompanyData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import Layout from "../components/Layout/Layout";
import Typography from '@material-ui/core/Typography';
import style from './css/About4IR.module.css';
import { Helmet } from "react-helmet";
import { Box } from "@material-ui/core";

export default function About4IR() {
    const companydata = useCompanyData();
    const about4ir = companydata.about4ir.json;
    console.log("Let's see what we have in companyData: " + JSON.stringify(companydata));
    return (
        // <Layout>
        <div>
            <Helmet>
                <title>4IR?</title>
            </Helmet>
            <div className={style.container}>
                {/* BOX 1 */}
                <Box
                    className={style.box}
                >
                    <Typography variant="h2" className={style.boxHeading}>
                        4IR?
                    </Typography>
                </Box>
                {/* BOX 2 */}
                <Box className={style.box2}>
                    <Typography variant="body1" className={style.box2Text}>
                        <h2 className={style.h2}>  What is the 4th Industrial Revolution?</h2>
                        <p className={style.p}>{documentToReactComponents(about4ir)}</p>
                    </Typography>
                </Box>
            </div>
            </div>
        // </Layout>
    );
};
