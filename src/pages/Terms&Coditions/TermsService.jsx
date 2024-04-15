import React, { useEffect } from 'react';
import './PrivacyPolicy.css';
import { Container } from 'react-bootstrap';
import { Box } from '@mui/material';

function TermsService() {

    useEffect(() => {

        document.title = "Terms of Service | FastCreditCards"


        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }, [])

    return (
        <div className='privacy_policy_page'>

            <h3 className='text-center text-light opacity-75'>
                Terms of Service
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
                        Welcome to FastCreditCards. Please read these Terms of Service \ Terms and Conditions
                        carefully before using this website.
                    </p>

                    <p >
                        By browsing and using this website you agree to comply with the following terms and
                        conditions of using our site. If you disagree with any part of the terms, then you may not
                        continue using the service.
                    </p>

                    <p >
                        This site may not be used for unlawful purposes.
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
                        Accounts
                    </h2>

                    <p >
                        Membership is limited to only one account per person and per household. The use of
                        more than one account is strictly forbidden.
                    </p>

                    <p >
                        Membership is limited to personal use only. Letting anyone else use your own personal
                        account may lead to termination of your account.
                    </p>

                    <p >
                        You need to be at least 13 years old to create an account.
                    </p>

                    <p >
                        Using any type of VPN, Proxy, VPS or Emulator software is strictly forbidden and may lead
                        to a termination of your account.
                    </p>

                    <p >
                        When creating an account at FastCreditCards you must provide us and our partners with
                        information that is true and accurate at all times. Failure to do so will lead to account
                        termination.
                    </p>

                    <p >Use of bots or any other software with the aim of 'automation' is prohibited.</p>
                    <p >
                        We reserve the right to refuse service to anyone, without any reason, at any time.
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
                        Account bans/freezes
                    </h2>

                    <p >
                        We reserve the right to ban or freeze users temporarily or permanently from
                        withdrawing at any time. Any activity that is deemed suspicious or potentially fraudulent
                        would warrant a freeze.
                    </p>

                    <p >
                        Any of the following warrants an account ban/freeze
                    </p>

                    <ul >
                        <li >
                            Using multiple accounts.
                        </li>

                        <li >
                            Completing offers on someone else’s account.
                        </li>

                        <li >
                            Using a VPN, VPS, Proxy or emulator software.
                        </li>

                        <li >
                            Receiving offer chargebacks/reversals.
                        </li>

                        <li >
                            Completing many offers in a short space of time.
                        </li>
                        <li >
                            Completing suspicious offers that have a high rate of chargebacks/reversals
                        </li>

                        <li >
                            Submitting any personal information which we determine to have been false or
                            inaccurate.
                        </li>
                    </ul>

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
                        Virtual Credits
                    </h2>

                    <p >
                        The on-site currency ("coins", "points") is not a form of real money. You acknowledge
                        that the points on our website are not redeemable for any real money or any other items
                        of monetary value from FastCreditCards.
                    </p>

                    <p >
                        We reserve the right to adjust/change/remove your point balance at any time.
                    </p>
                    <p >
                        We reserve the right to expire unredeemed points in accounts that last logged in to the
                        sites.
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
                        On-site chat
                    </h2>

                    <p>
                        We reserve the right to temporarily or permanently mute users from the chat at any
                        time.
                    </p>

                    <p >
                        The chat feature on the site may not be used for the following:
                    </p>

                    <ul >
                        <li >
                            Harassment.
                        </li>

                        <li >
                            Begging.
                        </li>

                        <li >
                            Advertising or spamming (this includes referral links/codes & spam regarding
                            withdraws).
                        </li>

                        <li >
                            Sharing pornographic or malicious links.
                        </li>

                        <li >
                            Discussing politics of any kind.
                        </li>
                    </ul>

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
                        Offer holds
                    </h2>

                    <p >
                        We reserve the right to temporarily hold the coins/points of offers at any time.
                    </p>

                    <p >
                        We reserve the right to hold these credits for up to 90 days after offer completion, or
                        until payment arrives from the third party.
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
                        Refunds
                    </h2>

                    <p >
                        Any user error such as entering the wrong withdraw address (such as email, crypto
                        address, etc.) are outside of our control and therefore not eligible for a refund from us. If
                        we have made an error you may receive a refund.
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
                        Referral codes
                    </h2>

                    <p >
                        We reserve the right to revoke user codes at any time and for any reason.
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
                        Verification
                    </h2>

                    <p >
                        We reserve the right to verify your identity through methods we deem necessary. This
                        can include (but not limited to) SMS, photocopy of your driver's license or ID card.
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
                        Limitations of Liability
                    </h2>

                    <p >
                        We are not liable for any damage/loss/profit caused by our website or from our third
                        party partners. Use of our service is at your own risk.
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
                        Intellectual property
                    </h2>

                    <p >
                        All material on this website is intellectual property of FastCreditCards. You may not use
                        anything for commercial use without our written consent. This also includes any similar
                        variations of the name FastCreditCards.
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
                        Governing Law
                    </h2>

                    <p >
                        These Terms shall be governed by Norwegian law. You agree that any dispute between
                        you and us regarding these Terms and the FastCreditCards site will only be dealt with by the
                        Norwegian courts.
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
                        If you have any questions, email us: <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}>contact@fastcreditcards.com</a>
                    </p>


                </Box>
            </Container>


        </div>
    )
}

export default TermsService
