import {MessageValidator} from "./MessageValidator";
import {
    HTTP_NOTIFICATION,
    HTTP_NOTIFICATION_NO_SUBJECT,
    LAMBDA_NOTIFICATION,
    LAMBDA_NOTIFICATION_NO_SUBJECT,
} from './capturedMessages.fixture';

jest.mock('./getCertificate', () => {
    return {getCertificate: jest.fn(() => Promise.resolve(
// Public certificate downloaded from
// https://sns.us-west-2.amazonaws.com/SimpleNotificationService-b95095beb82e8f6a046b3aafc7f4149a.pem
`-----BEGIN CERTIFICATE-----
MIIF5DCCBMygAwIBAgIQMlyV8Y5saUjyFgu3K5kFwTANBgkqhkiG9w0BAQsFADB+
MQswCQYDVQQGEwJVUzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xHzAd
BgNVBAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsxLzAtBgNVBAMTJlN5bWFudGVj
IENsYXNzIDMgU2VjdXJlIFNlcnZlciBDQSAtIEc0MB4XDTE2MDcyNzAwMDAwMFoX
DTE3MDgyMjIzNTk1OVowazELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldhc2hpbmd0
b24xEDAOBgNVBAcMB1NlYXR0bGUxGTAXBgNVBAoMEEFtYXpvbi5jb20sIEluYy4x
GjAYBgNVBAMMEXNucy5hbWF6b25hd3MuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOC
AQ8AMIIBCgKCAQEAmYrVPHC2QSE/OR8w9UfnjdPqEoAfOxhwJna/2W+/C+vTrMzd
4R9E3kfA3arf43LZFTSQ23Ed3Tao8srh/iK7DFv87bR+5uPnEO4fcHXDiJ1n3WMU
kjo+BEKXwSdR4AfIRUrJB2hk3mhXJoGkYJp3WBZ2ieoYBqwxpxuFRtNQW4ttqNwt
q4mONfxg0840e1kY+xFQa7ya8zg9FGaVgeLiN+e/gv5YYdrk8JG4P6kbzil9bETm
Xm+PXoxWy6cMAT3Coz1NNkPGQrKfNfGZSdPGh1d/89IwRh+eNUEIJ8PdnhzcvgN7
RQ5zs70V6u7StvrNukYftMwY0hIELlMUHYqRbQIDAQABo4ICbzCCAmswHAYDVR0R
BBUwE4IRc25zLmFtYXpvbmF3cy5jb20wCQYDVR0TBAIwADAOBgNVHQ8BAf8EBAMC
BaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMGEGA1UdIARaMFgwVgYG
Z4EMAQICMEwwIwYIKwYBBQUHAgEWF2h0dHBzOi8vZC5zeW1jYi5jb20vY3BzMCUG
CCsGAQUFBwICMBkMF2h0dHBzOi8vZC5zeW1jYi5jb20vcnBhMB8GA1UdIwQYMBaA
FF9gz2GQVd+EQxSKYCqy9Xr0QxjvMCsGA1UdHwQkMCIwIKAeoByGGmh0dHA6Ly9z
cy5zeW1jYi5jb20vc3MuY3JsMFcGCCsGAQUFBwEBBEswSTAfBggrBgEFBQcwAYYT
aHR0cDovL3NzLnN5bWNkLmNvbTAmBggrBgEFBQcwAoYaaHR0cDovL3NzLnN5bWNi
LmNvbS9zcy5jcnQwggEFBgorBgEEAdZ5AgQCBIH2BIHzAPEAdgDd6x0reg1PpiCL
ga2BaHB+Lo6dAdVciI09EcTNtuy+zAAAAVYpz1FWAAAEAwBHMEUCIFYpMqHzT/IG
WKgBt6SwXJhfYmj3JKtAJWq5dabI7TuKAiEAqYyWQUjlFuKkIwEhx8x1I+WJz+hp
npW7Na0CzyUvZWMAdwCkuQmQtBhYFIe7E6LMZ3AKPDWYBPkb37jjd80OyA3cEAAA
AVYpz1H+AAAEAwBIMEYCIQCY+492bMMCU3kRQPDQ27TRv5x+YuVkg+6ULi1Ddyea
KgIhANIVUCbM918/jMu0xc2cvrfov6SNAgPIjRLDGmDkLdJ1MA0GCSqGSIb3DQEB
CwUAA4IBAQBpQS/LverJ6gD2vuESrRi1COa4ABSLf584sL1yHLTNtf1GCUfZUgO+
CKacKGHcqxALOUi3m4PPQmuiNa20i6ttu7Q6+aj9zbq3VfJYwISFP1jLGjkiFtR2
ufBiIuB2T6dbZeYJ7Yg9DDTwwEgxHMjlT/DLyKPPPRFa0I/l3PmXMZh8iJNuxGiY
qOSxwAm9QMCaBJj+64HLyw4ZwO4rTgAxqtI/muZC3vw1nGoL7fer2X6MdW6PtYD/
ysixQTQtyDdNpB6yOGYFJv+Sf/0AcZST1a7HwfHt14JD+0I180FhGV1qFtx7KRUE
6Kw4sQp+ZMgtgzM8l3fDTMEgqpLSQH+2
-----END CERTIFICATE-----`
    ))};
});

describe('validating known messages', () => {
    const validator = new MessageValidator();

    it(
        'should successfully validate a captured HTTP(S) SNS message',
        async () => {
            await expect(validator.validate(HTTP_NOTIFICATION)).resolves;
        }
    );

    it(
        'should successfully validate a captured Lambda SNS message',
        async () => {
            await expect(validator.validate(LAMBDA_NOTIFICATION)).resolves;
        }
    );

    it(
        'should successfully validate a captured HTTP(S) SNS message without a subject',
        async () => {
            await expect(validator.validate(HTTP_NOTIFICATION_NO_SUBJECT))
                .resolves;
        }
    );

    it(
        'should successfully validate a captured Lambda SNS message without a subject',
        async () => {
            await expect(validator.validate(LAMBDA_NOTIFICATION_NO_SUBJECT))
                .resolves;
        }
    );

    it('should reject a captured HTTP(S) message that has been altered', () => {
            return expect(validator.validate({
                ...HTTP_NOTIFICATION,
                Message: 'A forged message',
            })).rejects.toMatchObject({
                message: 'The provided signature is not valid',
            });
        }
    );

    it('should reject a captured Lambda message that has been altered', () => {
            return expect(validator.validate({
                ...LAMBDA_NOTIFICATION,
                Message: 'A forged message',
            })).rejects.toMatchObject({
                message: 'The provided signature is not valid',
            });
        }
    );
});
