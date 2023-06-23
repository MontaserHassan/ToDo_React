import { cloneElement } from 'react'

const Loading = ({ children, loading, error }) => {

    return (
        <>
            {loading ? (
                <h3 colSpan={4}>loading please wait moment...</h3>
            ) : error ? (
                <h3 colSpan={4}>{error}</h3>
            ) : (
                children
            )}
        </>
    )
}

export default Loading