package orders
import (
	"context"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"github.com/gin-gonic/gin"
)

var orderCollection *mongo.Collection

func Init(orders *mongo.Collection) {
	orderCollection = orders
}

func getAllOrders(c *gin.Context) {
	ctx := context.TODO()
	var orders []Order
	cursor, err := orderCollection.Find(ctx, bson.D{})
	if err != nil {
		c.AbortWithError(http.StatusNotFound, err)
		return
	}
	defer cursor.Close(ctx)
	if err = cursor.All(ctx, &orders); err != nil {
		c.AbortWithError(http.StatusNotFound, err)
		return
	}
	if orders == nil {
		orders = make([]Order, 0)
	}
	c.JSON(http.StatusOK, orders)
}

func getOrderByID(c *gin.Context) {
	ctx := context.TODO()
	id, err := primitive.ObjectIDFromHex(c.Param("id"))
	if err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}
	filter := bson.D{primitive.E{Key: "_id", Value: id}}
	var order Order
	err = orderCollection.FindOne(ctx, filter).Decode(&order)
	if err != nil {
		c.AbortWithError(http.StatusNotFound, err)
		return
	}
	c.JSON(http.StatusOK, order)
}

func insertOrder(c *gin.Context) {
	ctx := context.TODO()
	var newOrder Order
	newOrder.ID = primitive.NewObjectID()
	if err := c.BindJSON(&newOrder); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}

	result, err := orderCollection.InsertOne(ctx, newOrder)
	if err != nil {
		c.AbortWithError(http.StatusInternalServerError, err)
		return
	}
	c.JSON(http.StatusCreated, result)
}