import { Button, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import resumeTheme from '../theme';
import { useTheme, createStyles, makeStyles } from '@material-ui/core/styles';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';
import { useSearchParams } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({
        downloadButton: {
            margin: '20px 0 0 0',
            padding: '0 10px 0 10px',
            float: 'left',
            color: 'primary'
        }


    }),
);

function DownloadPDF({ resumeRef }) {
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
        // pageStyle: `@page {size: A4,margin: 25mm 25mm 200mm 25mm}`
    });

    const theme = resumeTheme(useTheme());
    const classes = useStyles(theme);
    const handleDownloadPdf = async () => {
        const element = document.querySelector(".resume");
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const pdf = new JsPDF('portrait', 'pt', 'a4');
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / (imgProperties.width);

        pdf.addImage(data, 'PNG', 40, 40, pdfWidth - 80, pdfHeight - 40);
        pdf.save('print.pdf');
    };

    // const [searchParams, setSearchParams] = useSearchParams();
    const isExport = window.location.href.includes('export')//searchParams.get("export")
    console.log(window.location)
    return (
        <Grid item container spacing={1}>
            <Grid item>
                {/* <Button variant='contained' color='primary' className={classes.downloadButton}>
                    <a href={process.env.PUBLIC_URL + "AdrianDolha_2022_10.pdf"} >Download PDF</a>
                </Button> */}
                <Button variant='contained' color='primary'
                    component={Link} href={process.env.PUBLIC_URL + "AdrianDolha_2023_04.pdf"}
                    className={classes.downloadButton}>
                    Download PDF
                </Button>
            </Grid>
            {isExport &&
                <Grid item>
                    <Button onClick={handlePrint} variant='contained' className={classes.downloadButton}>Export to pdf</Button>
                </Grid>
            }

        </Grid>

    );
}

export default DownloadPDF;
