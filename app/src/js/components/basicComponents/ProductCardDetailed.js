import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export const ProductCardDetailed = props => {
    const { product } = props;

    return (
        <>
            {!!product && 
                <Card className="card">
                    <CardActionArea>
                        <img className='img' src={`data:image/jpeg;base64, ${product['productProductPhoto.productPhoto.largePhoto']}`}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                            </Typography>
							<Typography>Type:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
							  	{product['productSubcategory.name']}
							</Typography>
							<Typography>Price:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{product.listPrice}$
							</Typography>
							<Typography>Characteristics:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Color: {product.color}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Weight: {product.weight}{product.weightUnitMeasureCode}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Size: {product.size}{product.sizeUnitMeasureCode}
							</Typography>
							<Typography>Description:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{product.description}
							</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </>
    );
}