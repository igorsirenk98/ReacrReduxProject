import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

export const ProductCard = props => {
    const { product } = props;

    return (
        <>
            {!!product && 
                <Link
                    className="listItem link"
                    key={product.productId}
                    to={{
                        pathname: `/products/productId=${product.productId}`,
                        productId: product.productId
                    }}
                >
                    <Tooltip title="Click to view details" TransitionComponent={Zoom} arrow>
                        <Card className="card">
                            <CardActionArea className="listItem">
                                <img className='img' src={`data:image/jpeg;base64, ${product['productProductPhoto.productPhoto.largePhoto']}`}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Type: {product['productSubcategory.name']}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Price: {product.listPrice}$
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Tooltip>
                </Link>
            }
        </>
    );
}