<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerifyVacancySubmission extends Mailable
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
        return $this->subject($this->details['name'] . ', your vacancy has been activated')->view('components/email/verify-vacancy-submission');
    }

}
