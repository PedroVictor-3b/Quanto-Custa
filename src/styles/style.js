import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333'
    },

    form: {
        width: '100%',
        marginBottom: 20,
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff'
    },

    resultado: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },

})