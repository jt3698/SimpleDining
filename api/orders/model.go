package orders

import "go.mongodb.org/mongo-driver/bson/primitive"

type Item struct{
	Name string `bson:"name"`
	Price string `bson:"price"`
	Avatar_url string `bson:"avatar_url"`
	Quantity string `bson:"quantity"`
}

type Order struct {
	ID primitive.ObjectID `bson:"_id"`
	Items []Item `bson:"items"`
	Table_number int `bson:"table_number"`
	Status string `bson:"status"`
}
