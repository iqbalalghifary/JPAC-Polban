<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerifyRegistration extends Mailable
{
    use Queueable, SerializesModels;
    public $details, $actor;

    public function __construct($details, $actor)
    {
        $this->details = $details;
        $this->actor = $actor;
    }

    public function build()
    {
        if($this->actor == "company"){
            return $this->subject($this->details['name'] . ', your account has been activated')->view('components/email/verify-registration');
        }
    }

}
