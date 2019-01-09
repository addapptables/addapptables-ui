import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const AboutMe = () => (
    <div>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>General Info</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Names: Sebastian<br />
                    Surnames: De La Roche López<br />
                    Birth: 03/03/1995<br />
                    Country: COP<br />
                    Location: Antioquia<br />
                    Cellphone Number: 3114006867<br />
                    Email: sebastian@gmail.com<br />
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
);
