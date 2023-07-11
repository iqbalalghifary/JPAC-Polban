<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DenyVacancySubmission extends Mailable
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
            return $this->subject($this->details['name'] . ', your vacancy has been rejected')->view('components/email/deny-vacancy-submission');
        }
    }

}
