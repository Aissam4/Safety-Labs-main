# API

### add user | Post: /api/users/add
```json
    {
        "Twitterusername": "String",
        "DiscordUsername": "String",
        "DiscordInvite":   "String",
        "DiscordBot":      "String",
        "Reference":       "String",
    }
```

##### respond on success:
status: 200
```json
    {
        message: "User added successfully",
        data: {
            "id": "Number",
            "Twitterusername": "String",
            "DiscordUsername": "String",
            "DiscordInvite":   "String",
            "DiscordBot":      "String",
            "Reference":       "String",
            "createdAt":       "Date",
        }
    }
```

##### respond on error in data or database:
status: 500
```json
    {
        message: "Error adding user",
        error: "String"
    }
```


### get user | Get: /api/users/get/:id

##### respond on success:
status: 200
```json
    {
        data: {
            "id": "Number",
            "Twitterusername": "String",
            "DiscordUsername": "String",
            "DiscordInvite":   "String",
            "DiscordBot":      "String",
            "Reference":       "String",
            "createdAt":       "Date",
        }
    }
```

##### respond on error in data or database:
status: 500
```json
    {
        error: "String"
    }
```

### get users | Get: /api/users

##### respond on success:
status: 200
```json
    {
        data: [
            {
                "id": "Number",
                "Twitterusername": "String",
                "DiscordUsername": "String",
                "DiscordInvite":   "String",
                "DiscordBot":      "String",
                "Reference":       "String",
                "createdAt":       "Date",
            }
        //   ...
        ]
    }
```

##### respond on error in database:
status: 500
```json
    {
        error: "String"
    }
```


### update user | Put: /api/users/:id
```json
    {
        "Twitterusername": "String",
        "DiscordUsername": "String",
        "DiscordInvite":   "String",
        "DiscordBot":      "String",
        "Reference":       "String",
    }
```

##### respond on success:
status: 200
```json
    {
        message: "User updated successfully",
        data: {
            "id": "Number",
            "Twitterusername": "String",
            "DiscordUsername": "String",
            "DiscordInvite":   "String",
            "DiscordBot":      "String",
            "Reference":       "String",
            "createdAt":       "Date",
        }
    }
```

##### respond on error in data or database:
status: 500
```json
    {
        message: "Error updating user",
        error: "String"
    }
```

### delete user | Delete: /api/users/:id

##### respond on success:
status: 200
```json
    {
        message: "User deleted successfully",
        data: {
            "id": "Number",
            "Twitterusername": "String",
            "DiscordUsername": "String",
            "DiscordInvite":   "String",
            "DiscordBot":      "String",
            "Reference":       "String",
            "createdAt":       "Date",
        }
    }
```

##### respond on error in data or database:
status: 500
```json
    {
        message: "Error deleting user",
        error: "String"
    }
```
