import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'

function CookiesPolicy() {

    useEffect(() => {

        document.title = 'Cookie Policy | FastCreditCards'

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }, [])

    return (
        <div className='privacy_policy_page'>

            <h3 className='text-center text-light opacity-75'>
                Cookie Policy
            </h3>

            <Container className='mt-3'>
                <Box
                    sx={{
                        border: '2px solid rgba(255 ,255 ,255, .5)',
                        borderRadius: .6 + 'em',
                        p: 2,
                    }}
                >

                    <h2 className='border-bottom'>
                        Introduction
                    </h2>

                    <p >
                        FastCreditCards, Our refers to the owner of the website, The term 'you' refers to the user or
                        viewer of our website.
                    </p>

                    <p >
                        This cookie policy explains what we use cookies for, how third parties may use cookies,
                        what they are and your choices regarding cookies.
                    </p>



                </Box>
            </Container>

            <Container className='mt-3'>
                <Box
                    sx={{
                        border: '2px solid rgba(255 ,255 ,255, .5)',
                        borderRadius: .6 + 'em',
                        p: 2,
                    }}
                >

                    <h2 className='border-bottom'>
                        Cookies in short
                    </h2>

                    <p >
                        A cookie is a small packet of data sent by your browser to a website you visit. Cookies are
                        stored in your web browser and allows us to recognize you and make your next visit to
                        our site easier.
                    </p>



                </Box>
            </Container>

            <Container className='mt-3'>
                <Box
                    sx={{
                        border: '2px solid rgba(255 ,255 ,255, .5)',
                        borderRadius: .6 + 'em',
                        p: 2,
                    }}
                >

                    <h2 className='border-bottom'>
                        How we use cookies
                    </h2>

                    <p >
                        We may place cookies in your browser, these are useful for various purposes, for various
                        purposes, such as:
                    </p>

                    <ul >
                        <li >
                            Enabling features of our service.
                        </li>

                        <li >
                            Essential cookies for authentication and fraud detection.
                        </li>
                    </ul>

                    <p >
                        The cookies we use may be session, persistent, preference and security cookies.
                    </p>

                </Box>
            </Container>

            <Container className='mt-3'>
                <Box
                    sx={{
                        border: '2px solid rgba(255 ,255 ,255, .5)',
                        borderRadius: .6 + 'em',
                        p: 2,
                    }}
                >

                    <h2 className='border-bottom'>
                        Cookie choices
                    </h2>

                    <p >
                        To access our service, we require you to agree with our cookie policy, if you disagree with
                        it, you may not continue using or visiting our service. You may delete these cookies from
                        your browser at any time, you should find instructions for your specific browser.
                    </p>



                </Box>
            </Container>

            <Container className='mt-3'>
                <Box
                    sx={{
                        border: '2px solid rgba(255 ,255 ,255, .5)',
                        borderRadius: .6 + 'em',
                        p: 2,
                    }}
                >

                    <h2 className='border-bottom'>
                        Contact
                    </h2>

                    <p >
                        For any questions regarding our cookie policy, please email: <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}>contact@fastcreditcards.com</a>.
                    </p>

                </Box>
            </Container>

        </div>
    )
}

export default CookiesPolicy
